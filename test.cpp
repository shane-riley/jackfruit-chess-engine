#include <iostream>
#include <string>
#include <winsock2.h>
#include <Windows.h>
#include "httplib.h"
//Compile with posix threads, -lwsock32 -lws2_32
int main(int argc, char const *argv[])
{
	httplib::Client cli("localhost:5000");
	httplib::Result res = cli.Get("/fen");
	std::cout << res->body << std::endl;
	return 0;
}
