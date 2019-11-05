FROM python:3.7
MAINTAINER Ihor Kuzmenko "0585ec@gmail.com"

ENV PYTHONUNBUFFERED 1

# Install base dependencies
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        python \
        rsync \
        software-properties-common \
        devscripts \
        autoconf \
        ssl-cert \
    && apt-get clean


RUN mkdir /gretir
WORKDIR /gretir
ADD . .

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements/base.txt

EXPOSE 8088
