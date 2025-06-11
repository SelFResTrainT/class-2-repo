// Create an http server from scratch in C.

#include<stdio.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<string.h>
#include<stdlib.h>
#include<unistd.h>
int main(){
  printf("Today is a great day ! :> ");
  printf("Hello from http server\n");

  // A socket is made
  int sockfd = socket(AF_INET,SOCK_STREAM,0);

  // structure containing the IP address and port of the server.
  struct sockaddr_in server_addr = {
    .sin_family = AF_INET,
    .sin_port = htons(8080),
    .sin_addr.s_addr = INADDR_ANY
  };

  // Assigning the IP address and port to the socket.
  bind(sockfd, (struct sockaddr *)&server_addr, sizeof(server_addr));

  // Server can take request on the assigned IP address and port.
  listen(sockfd,5);

  // The accept function starts taking request from the client, removes the request from the listen queue, creates a socket for client, return a file descriptor for the client.
  struct sockaddr_in client_addr;
  socklen_t addr_len = sizeof(client_addr);
  int client_fd = accept(sockfd, (struct sockaddr *)&client_addr, &addr_len);

  // Recv will reveive the data sent by the client.
  char buffer[1024];
  ssize_t bytes_received = recv(sockfd, buffer, sizeof(buffer), 0);

  // Server response to the client request.
  const char *response =
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Content-Length: 32\r\n"
    "\r\n"
    "<html><body><h1>Hello</h1></body></html>";
  
  send(client_fd,response,strlen(response),0);

  // Terminating the request session.
  close(client_fd);
  close(sockfd);

  return 0;
}

