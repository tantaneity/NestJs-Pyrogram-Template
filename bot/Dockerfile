FROM python:3.10-slim

RUN apt-get update && \
    apt-get install -y npm && \
    npm install -g nodemon && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
COPY requirements.txt /requirements.txt
RUN pip install --no-cache-dir -r /requirements.txt
COPY . /app
WORKDIR /app
COPY nodemon.json /nodemon.json
CMD ["nodemon", "-L"]