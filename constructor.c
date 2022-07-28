#include<stdio.h>
void before_main() __attribute__((constructor));
void after_main() __attribute__((destructor));
void before_main() {
	   printf("This is executed before main.\n");
}
void after_main() {
	   printf("This is executed after main.");
}
int main(void) {
	   printf("Inside main\n");
	   return (0);
}
