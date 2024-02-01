import unittest
from unittest.mock import patch
from io import StringIO
from cron_parser import expand_cron, format_output, MinuteOutOfRangeError, HourOutOfRangeError, DayOfMonthOutOfRangeError, MonthOutOfRangeError, DayOfWeekOutOfRangeError

class TestCronExtractor(unittest.TestCase):

    def run_test(self, cron_string, expected_output, expected_error=None):
        with self.subTest(cron_string=cron_string):
            with patch('sys.argv', ['', 'test.py', cron_string]):
                with patch('sys.stdout', new_callable=StringIO) as mock_stdout:
                    if expected_error is not None:
                        with self.assertRaises(expected_error):
                            expanded_schedule = expand_cron(cron_string)
                            format_output(expanded_schedule)
                    else:
                        expanded_schedule = expand_cron(cron_string)
                        format_output(expanded_schedule)

                        actual_output = mock_stdout.getvalue().strip().split('\n')
                        for expected, actual in zip(expected_output, actual_output):
                            if expected[0] == "command":
                                self.assertEqual(actual.strip(), f"{expected[0]:<14} {''.join(map(str, expected[1]))}")
                            else:
                                self.assertEqual(actual.strip(), f"{expected[0]:<14} {' '.join(map(str, expected[1]))}")

    def test_standard_case(self):
        cron_string = '*/10 0 2,15 * 1-2 /usr/bin/find'
        expected_output = [
            ("minute", [0, 10, 20, 30, 40, 50]),
            ("hour", [0]),
            ("day of month", [2, 15]),
            ("month", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            ("day of week", [1, 2]),
            ("command", "/usr/bin/find")
        ]
        self.run_test(cron_string, expected_output)

    def test_step_values_and_ranges(self):
        cron_string = '*/5 4,10 1-5,10,15 * 2,4-6 /bin/command'
        expected_output = [
            ("minute", [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]),
            ("hour", [4, 10]), 
            ("day of month", [1, 2, 3, 4, 5, 10, 15]),
            ("month", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            ("day of week", [2, 4, 5, 6]),
            ("command", "/bin/command")
        ]
        self.run_test(cron_string, expected_output)

    def test_all_fields_as_asterisk(self):
        cron_string = '* * * * * /usr/bin/command'
        expected_output = [
            ("minute", list(range(0, 60))),
            ("hour", list(range(0, 24))),  # Corrected to be within 1-24
            ("day of month", list(range(1, 32))),
            ("month", list(range(1, 13))),
            ("day of week", list(range(1, 8))),  # Corrected to be within 1-7
            ("command", "/usr/bin/command")
        ]
        self.run_test(cron_string, expected_output)

    def test_specific_command_and_hour_out_of_range(self):
        cron_string = '*/15 25 * * * /usr/bin/command'
        expected_output = [
            ("minute", [0, 15, 30, 45]),
            ("hour", [25]),  # Corrected to be within 1-24
            ("day of month", list(range(1, 32))),
            ("month", list(range(1, 13))),
            ("day of week", list(range(1, 8))),  # Corrected to be within 1-7
            ("command", "/usr/bin/command")
        ]
        self.run_test(cron_string, expected_output, HourOutOfRangeError)

    def test_minimum_values_for_all_fields(self):
        cron_string = '0 0 1 1 1 /bin/echo'
        expected_output = [
            ("minute", [0]),
            ("hour", [0]),
            ("day of month", [1]),
            ("month", [1]),
            ("day of week", [1]),
            ("command", "/bin/echo")
        ]
        self.run_test(cron_string, expected_output)


    def test_maximum_values_for_all_fields(self):
        cron_string = '59 23 31 12 6 /bin/echo'
        expected_output = [
            ("minute", [59]),
            ("hour", [23]),
            ("day of month", [31]),
            ("month", [12]),
            ("day of week", [6]),
            ("command", "/bin/echo")
        ]
        self.run_test(cron_string, expected_output)

def test_minute_out_of_range(self):
    cron_string = '*/61 0 * * * /bin/echo'
    expected_output = []
    self.run_test(cron_string, expected_output, expected_error=MinuteOutOfRangeError)


    def test_hour_out_of_range(self):
        cron_string = '*/5 24 * * * /bin/echo'
        expected_output = []
        self.run_test(cron_string, expected_output, HourOutOfRangeError)

    def test_day_of_month_out_of_range(self):
        cron_string = '*/10 0 32 * * /bin/echo'
        expected_output = []
        self.run_test(cron_string, expected_output, DayOfMonthOutOfRangeError)

    def test_month_out_of_range(self):
        cron_string = '*/10 0 * 13 * /bin/echo'
        expected_output = []
        self.run_test(cron_string, expected_output, MonthOutOfRangeError)

    def test_day_of_week_out_of_range(self):
        cron_string = '*/10 0 * * 8 /bin/echo'
        expected_output = []
        self.run_test(cron_string, expected_output, DayOfWeekOutOfRangeError)

if __name__ == '__main__':
    unittest.main()
