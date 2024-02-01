import sys

class CronError(Exception):
    pass

class MinuteOutOfRangeError(CronError):
    pass

class HourOutOfRangeError(CronError):
    pass

class DayOfMonthOutOfRangeError(CronError):
    pass

class MonthOutOfRangeError(CronError):
    pass

class DayOfWeekOutOfRangeError(CronError):
    pass

def expand_cron(cron_string):
    fields = ["minute", "hour", "day of month", "month", "day of week", "command"]
    cron_values = cron_string.split()

    expanded_schedule = []
    for i in range(5):
        field_name = fields[i]
        field_value = cron_values[i]
        expanded_values = expand_field(field_value, i)
        expanded_schedule.append((field_name, expanded_values))

    # Last field is the command
    expanded_schedule.append(("command", cron_values[5]))

    return expanded_schedule

def expand_field(field, field_index):
    lower_limit = get_field_lower_limit(field_index)
    upper_limit = get_field_upper_limit(field_index)

    if field == '*':
        return list(range(lower_limit, upper_limit + 1))
    elif '*/' in field:
        step = int(field[2:])
        return list(range(lower_limit, upper_limit + 1, step))

    expanded_values = []
    ranges = field.split(',')
    for r in ranges:
        if '-' in r:
            start, end = map(int, r.split('-'))
            if start < lower_limit or end > upper_limit:
                raise_error(field_index)
            expanded_values.extend(range(start, end + 1))
        else:
            value = int(r)
            if value < lower_limit or value > upper_limit:
                raise_error(field_index)
            expanded_values.append(value)

    return expanded_values

def get_field_lower_limit(field_index):
    return 0 if field_index == 0 or field_index == 1 else 1

def get_field_upper_limit(field_index):
    return 59 if field_index == 0 else 23 if field_index == 1 else 31 if field_index == 2 else 12 if field_index == 3 else 7 if field_index == 4 else 6

def raise_error(field_index):
    if field_index == 0:
        raise MinuteOutOfRangeError("Minute values must be between 0 and 59")
    elif field_index == 1:
        raise HourOutOfRangeError("Hour values must be between 0 and 23")
    elif field_index == 2:
        raise DayOfMonthOutOfRangeError("Day of month values must be between 1 and 31")
    elif field_index == 3:
        raise MonthOutOfRangeError("Month values must be between 1 and 12")
    elif field_index == 4:
        raise DayOfWeekOutOfRangeError("Day of week values must be between 1 and 7")

def format_output(expanded_schedule):
    for field, values in expanded_schedule:
        if field == "command":
            print(f"{field:<14} {''.join(map(str, values))}")
        else:
            print(f"{field:<14} {' '.join(map(str, values))}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 CronExtractor.py '*/15 0 1,15 * 1-5 /usr/bin/find'")
        sys.exit(1)

    cron_string = sys.argv[1]
    try:
        expanded_schedule = expand_cron(cron_string)
        format_output(expanded_schedule)
    except CronError as e:
        print(f"Error: {e}")
        sys.exit(1)
