#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void print_error(char *command)
{
	char c;
	int i = 1;

	c = i + '0';
	write(1, "");
}

int main(void)
{
	char *str = "ls";
	print_error(str);

	return (0);
}
