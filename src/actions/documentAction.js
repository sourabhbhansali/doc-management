import DocumentService from '../services/DocumentService';
import * as Types from './types';

const fetchDocuments = () => async (dispatch) => {
    try {
        const res = await DocumentService.getAllDocuments();
        dispatch({
            type: Types.FETCH_DOCUMENTS,
            payload: res,
        });
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}

const uploadDocument = (formData) => async (dispatch) => {
    try {
        await DocumentService.uploadDocument(formData);
        console.log('after upload document call');
        dispatch({
            type: Types.UPLOAD_DOCUMENTS
        })
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}

const DocumentAction = {
    fetchDocuments,
    uploadDocument
}

export default DocumentAction;