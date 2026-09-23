pipeline {
    agent any

    stages {

        stage('Clone GitHub Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Deepikalai21/jenkins-Docker-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-web-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop jenkins-web-container || true'
                sh 'docker rm jenkins-web-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name jenkins-web-container --restart unless-stopped -p 8081:80 jenkins-web-app'
            }
        }
    }
}