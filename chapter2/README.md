# Chapter 2 - A simple containerized node.js application

## Build the image
`docker build . -t kubia-chapter2`

## run the container
`docker run -d --name kubia-chapter2 -p 8080:8080 kubia-chapter2`

## stop and remove the container
`docker stop kubia-chapter2 && docker rm kubia-chapter2`