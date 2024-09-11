pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-ui-app:latest'
        HOST_PORT = '80'  // The port on which the app will run
        CONTAINER_NAME = 'react-ui-app'
    }

    stages {
        stage('Checkout Code from Git') {
            steps {
                // Replace with your Git repository URL
                git url: 'https://github.com/Arullamudhane/blueto.git', branch: 'branch-2s'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image for React app..."
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    echo "Pushing the image to Docker Hub..."
                    withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPass', usernameVariable: 'dockerHubUser')]) {
                        sh "docker tag ${DOCKER_IMAGE} ${env.dockerHubUser}/my-react-ui:latest"
                        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                        sh "docker push ${env.dockerHubUser}/my-react-ui:latest"
                    }
                }
            }
        }

        stage('Deploy Docker Container Locally') {
            steps {
                script {
                    echo "Stopping and removing any existing container..."
                    // Stop and remove the running container if it exists
                    sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    """
                    
                    echo "Running the new Docker container locally..."
                    // Run the new Docker container
                    sh """
                    docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:80 ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
        }
        success {
            echo 'React application has been successfully deployed locally!'
        }
        failure {
            echo 'The deployment failed.'
        }
    }
}
