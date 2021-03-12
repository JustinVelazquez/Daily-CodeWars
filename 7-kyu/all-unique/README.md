Title: All unique

Description:

Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

<!-- **\*\*\***NOTES****\*\*\*\***** -->

This is my first time learning about Set objects in javascript. From my understanding Set is an object that lets you store unique values of any type. When we store the string we pass in an ARG, it is a iterable to SET creates an entry for each separate character which will in turn get rid of any duplicates

The .size property gives us the number of entries in the Set object. The function returns a Truthy or false value by comparing the length of the input string with the amount of unique characters in the Set object.
