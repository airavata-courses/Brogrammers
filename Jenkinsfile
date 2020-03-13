pipeline {
<<<<<<< HEAD
    agent any
     tools {nodejs "InstanceNodeJS"}
=======
    agents any
>>>>>>> f5cfd5463e787bd4e38ab5b44f545c2ef6744420
    stages {
        stage('Build Application') {
            steps {
                sh 'mvn -f Gateway/pom.xml clean package'
            }
            post {
                success {
                    echo ""
                    archiveArtifacts artifacts: '**/*.jar'
                }
            }
        }
        es {
        stage('Build Application') {
            steps {
                sh 'mvn -f UserManagement/pom.xml clean package'
            }
            post {
                success {
                    echo ""
                    archiveArtifacts artifacts: '**/*.jar'
                }
            }
        }
        stage('Install dependencies for Node') {
            steps {
                dir('Session_Management/') {
                       checkout scm
                       sh 'npm install'
                }
                
            }
        }
        stage('build Python Dependencies') {
            steps {
                   dir('Data_Retrieval/') {
                       checkout scm
                 sh 'pip install -r Data_Retrieval/requirements.txt'
                  }
            }
        }  
        stage('build Python Dependencies') {
            steps {
                   dir('Model_Execution/') {
                       checkout scm
                 sh 'pip install -r Model_Execution/requirements.txt'
                  }
            }
        }
        
        stage('build Python Dependencies') {
            steps {
                   dir('Data_Retrieval/') {
                       checkout scm
                 sh 'pip install -r Data_Retrieval/requirements.txt'
                  }
            }
        }

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
