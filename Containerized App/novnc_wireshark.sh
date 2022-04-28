#!/bin/bash

	#create the docker container for wireshark
	cd capstone 					&& \
	sudo docker build -t wireshark . 		&& \
	sudo docker network create wireshark-net	&& \   
	sudo docker volume create wireshark-data 	&& \
	sudo docker run --detach --restart=always --volume=wireshark-data:/data --net=wireshark-net --cap-add NET_ADMIN --privileged  --name=wireshark-app wireshark
	

	#host it with caddy through a container
	cd ../caddy					&& \
	sudo docker build -t wireshark-caddy . 		&& \
	docker run --detach --restart=always --volume=wireshark-data:/data --net=wireshark-net --cap-add NET_ADMIN --name=wireshark-web --privileged  --env=APP_USERNAME="user" --env=APP_PASSWORD_HASH="JDJhJDEwJFpOdllqSWduV0t5SXpodjlhVmF3RXVVOWZKUXVCcGxGWVY2WktlUTdEM01NQUJkRjgyeWlt" --publish=8080:8080 wireshark-caddy

	#return home
	cd ..
