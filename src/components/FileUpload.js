import { useState } from "react"
import DocumentService from "../services/DocumentService";


const FileUpload = () => {

    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");

    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    }

    const upload = () => {
        let currentFile = selectedFiles[0];
        setProgress(0);
        setCurrentFile(currentFile);
        console.log('in upload');
        DocumentService.uploadDocument(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        }).then((response) => {
            setMessage(response.data.message);
        }).catch((err) => {
            setProgress(0);
            setMessage(err.response.data.message);
            setCurrentFile(undefined);
        });
        setSelectedFiles(undefined);
    }

    return (
        <div>
          {currentFile && (
            <div className="progress">
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progress + "%" }}
              >
                {progress}%
              </div>
            </div>
          )}
          <label className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>
          <button
            className="btn btn-success"
            disabled={!selectedFiles}
            onClick={upload}
          >
            Upload
          </button>
          <div className="alert alert-light" role="alert">
            {message}
          </div>
        </div>
      );

}

export default FileUpload;