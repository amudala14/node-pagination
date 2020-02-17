const getPaginationResults = (model, page, limit) => {
   
    const results = {}

    const startIndex = (page -1) * limit;
    const endIndex = page * limit;

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }

    if (endIndex < model.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    results.results = model.slice(startIndex, endIndex);
    console.log(results);
    
    return results;
}

module.exports = getPaginationResults;