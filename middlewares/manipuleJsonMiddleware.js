const manipuleJSON = (doc) => {
    
    delete doc.works;
    delete doc.type;
    delete doc.identifiers;
    delete doc.latest_revision;
    delete doc.revision;
    delete doc.created;
    delete doc.last_modified;

    return doc;
} 

module.exports = {
    manipuleJSON
}


