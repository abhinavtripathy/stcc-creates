























async function cloudVision() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient({

        keyFilename:"./key.json"
    });

    try {

        // Performs label detection on the image file
        const [result] = await client.labelDetection('./test.jpg');
        const labels = result.labelAnnotations;
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));

    }

    catch {

        console.log("error")

    }
    
  }

cloudVision();