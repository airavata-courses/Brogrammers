node{
   
    stage("SCM Checkout"){
       
        git branch: 'Dockerized-Gateway-API', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Mvn Package'){
       
        def mvnHome= tool name: 'maven-3', type: 'maven'
        def mvnCMD = "${mvnHome}/bin/mvn"
       sh "${mvnCMD} clean package"
    }
    stage('Build Docker Image'){
       
         sh "docker build -t arjunbh/gateway-api:1.0.0 ."
    }
   
    stage('Push Docker Image'){
        withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
     sh "docker login -u arjunbh -p brogrammers "
       
       
}
  sh "docker push arjunbh/gateway-api:1.0.0"
     
    }
   
}
