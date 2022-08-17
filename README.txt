wCat is a clone of cat command available in bash.
It is used to display or make a copy content of one or more files in the terminal 

Command Line Syntax

wcat [options] [files]

option to remove big line break (-s)
option to add line number to non empty lines (-b)
option to add line numbers to all lines (-n) 

Example Commands:
1. `wcat filename` => displays content of the file in the terminal 
2. `wcat filename1 filename2 filename3...` => displays content of all files in the terminal(contactenated form) in the given order.
3. `wcat -s filename` => convert big line breaks into a singular file 
4. `wcat -n filename` => give numbering to all the lines 
5. `wcat -b filename` => give numbering to non-empty lines 
6. `wcat -s filename > filename2` =>get the file content of filename remove large spaces and save the output in filename2

We can mix and match the options.

Edge cases:
1. If file entered is not found then it gives file does not exist error.
2. -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.
