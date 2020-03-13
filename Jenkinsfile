pipeline {
    agents any
    stages {
        stage('Building Docker image') {
            steps {
                  checkout scm
            sh '''
                sudo apt --assume-yes install docker.io
                sudo systemctl start docker
                sudo systemctl enable docker   
                python -m pip uninstall -y urllib3
				python -m pip install urllib3==1.22
                sudo docker-compose up --build
            '''    
            }
        }
        stage('Docker hub Push Image') {
            steps {
                  checkout scm
            sh '''
                sudo docker login --username=arjunbh --password=brogrammers
                sudo docker-compose push
            '''    
            }
        }
    }
}
