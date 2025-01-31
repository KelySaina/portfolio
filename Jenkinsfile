pipeline {
    agent any

    environment {
        BUILD_DIR = 'build'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/KelySaina/portfolio'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }


        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Server') {
            steps {
                script {
                    def server = '192.168.57.3'
                    def deployPath = '/var/www/react-portfolio'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful! 🚀'
        }
        failure {
            echo 'Build Failed! ❌'
        }
    }
}
