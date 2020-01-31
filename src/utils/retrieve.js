const retrieve = async (url, options) => {
    console.log(url, options); // eslint-disable-line
    return await fetch(new Request(url, {
        ... options,
        mode: 'no-cors',
    }));
};

export {
    retrieve,
};
