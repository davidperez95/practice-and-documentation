#include <stdio.h>
#include <stdlib.h>

int input(char *s, int length);

int main()
{
	char *buffer;
	size_t bufsize = 32;
	size_t characters;

	buffer = (char *)malloc(sizeof(char) * bufsize);
	if (!buffer)
		exit(1);

	printf("$ ");
	characters = getline(&buffer, &bufsize, stdin);
	printf("%zu characters were read.\n", characters);
	printf("%s\n", buffer);

	free(buffer);

	return (0);
}
