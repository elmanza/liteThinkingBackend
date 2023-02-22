const UploadFileFactoryHandler = require("../../../utils/multer/uploadFileFactoryHandler");

module.exports = {
    uploadFile: function(){
        return UploadFileFactoryHandler.getUploadMiddleware(
            'companies',
            'companies',
            undefined,
            undefined,
            { files: 4 },
            false
        )
    }
}