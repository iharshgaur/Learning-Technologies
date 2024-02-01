# Cron Parser

A Python script to parse and expand cron expressions into readable schedules.

## Usage

In order to run this you mush be having python3 installed in your system. Please refer the official documentation to install python3 in your machine.

Once done open the terminal and route to the project directory and run this command

```bash
python3 cron_parser.py '*/15 0 1,15 * 1-5 /usr/bin/find'
``````

In the above command '*/15 0 1,15 * 1-5 /usr/bin/find':

* Minute field ('*/15'): Execute every 15 minutes.
* Hour field ('0'): Execute at the 0th hour (midnight).
* Day of month field ('1,15'): Execute on the 1st and 15th days of the month.
* Month field ('*'): Execute every month.
* Day of week field ('1-5'): Execute on Monday to Friday.
* Command ('/usr/bin/find'): Execute the '/usr/bin/find' command.


You can similarly test for your own expression

## Running the test cases

In order to run the test cases use this command

```bash
python3 test_cron_parser.py
```
Make sure that cron_parser.py and test_cron_parser.py files are in same directory