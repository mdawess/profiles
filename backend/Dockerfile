# start by pulling the python image
FROM python:3.10

# switch working directory
WORKDIR /backend

# copy the requirements file into the image
COPY requirements.txt requirements.txt

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY . ./

# configure the container to run in an executed manner
CMD exec gunicorn --bind :8080 --workers 1 --threads 8 --timeout 3600 server:app