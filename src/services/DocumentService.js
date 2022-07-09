
import axios from 'axios';

const getAllDocuments = async () => {
    const res = await axios.get("http://localhost:8081/api/files", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    console.log(res);
    return await res.data;
};

const uploadDocument = (file, onUploadProgress) => {
    let formData = new FormData();
    formData.append("file", file);
    return axios
        .post("http://localhost:8081/api/files/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress,
        });
};

const DocumentService = {
    getAllDocuments,
    uploadDocument
}

export default DocumentService;