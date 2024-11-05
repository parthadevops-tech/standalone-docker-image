pipeline {
    agent any
    
    // tools {
    //     NodeJS 'NodeJS 23.1.0' // Ensure this matches the NodeJS installation name in Jenkins
    // }
    
    environment {
        BUILD_DIR = "dist/standalone-component15/browser"
        APACHE_DEPLOY_DIR = "/var/www/html/standalone-app"
        IMAGE_NAME = "angularapp-jenkins"
        CONTAINER_NAME = "angularapp_container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/parthadevops-tech/standalone-docker-image.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build Angular App') {
            steps {
                 script {
                    def nodejsHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejsHome}/bin:${env.PATH}"
                }
                sh 'npm run build --prod'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Create a Dockerfile for the build
                writeFile file: 'Dockerfile', text: '''
                FROM httpd:2.4
                COPY  ./dist/standalone-component15/browser /usr/local/apache2/htdocs/standalone-app/
                RUN chown -R www-data:www-data /usr/local/apache2/htdocs/standalone-app/ && \
                chmod -R 755 /usr/local/apache2/htdocs/standalone-app/
                RUN ls -la /usr/local/apache2/htdocs/standalone-app/
                RUN rm -rf /usr/local/apache2/htdocs/index.html
                RUN mv /usr/local/apache2/htdocs/standalone-app/* /usr/local/apache2/htdocs/ 
                EXPOSE 80
                '''
                
                // Build Docker image
                sh "docker build -t $IMAGE_NAME ."
            }
        }
        
        stage('Deploy to Apache') {
            steps {
                script {
                  // def containerExists = sh(script: "docker ps -a -q -f name=${IMAGE_NAME}", returnStatus: true) == 0
                  // if (containerExists) {
                  //     sh "docker stop ${IMAGE_NAME}"
                  //     sh "docker rm ${IMAGE_NAME}"
                  // }

                    // Run a new container with the built Docker image on port 8081 (or any other available port)
                    //sh "docker run -d --name ${IMAGE_NAME} -p 8081:80 ${IMAGE_NAME}"
                    // Stop and remove any existing container
                    sh "docker stop $CONTAINER_NAME || true"
                    sh "docker rm $CONTAINER_NAME || true"

                    // Run the Docker container
                    sh "docker run -d --name $CONTAINER_NAME -p 8082:80 $IMAGE_NAME"
                    // Check if the build directory exists
                    //f (fileExists(env.BUILD_DIR)) {
                        //echo "Build directory found, deploying to Apache server..."
                        
                        // Remove the existing files in the Apache deployment directory
                        //sh "sudo rm -rf ${env.APACHE_DEPLOY_DIR}/*"
                        
                        // Copy the newly built files to the Apache deployment directory
                        //sh "sudo cp -r ${env.BUILD_DIR}/* ${env.APACHE_DEPLOY_DIR}/"
                        
                        // Set the correct permissions for the files
                        //sh "sudo chown -R www-data:www-data ${env.APACHE_DEPLOY_DIR}"
                        //sh "sudo chmod -R 755 ${env.APACHE_DEPLOY_DIR}"
                        
                        // Restart Apache server
                        //sh 'sudo systemctl restart apache2'
                        
                        //echo "Deployment complete!"
                    //} else {
                        //error("Build directory not found! Deployment aborted.")
                    //}
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
