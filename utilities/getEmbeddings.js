const getEmbeddings = async (data) => {
  try{
    const response = await fetch('https://my-model.openai.azure.com/openai/deployments/text-embeding/embeddings?api-version=2023-05-15', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '77dd36eb4ed94c0384de38f9d72053a5'
        },
        body: JSON.stringify({
            input: JSON.stringify(data),
            model: "text-embedding-3-large",
        }),
    });
    let embedding;
    console.log("i am response: ", response);
    if(response.ok){
        const jsonResponse = await response.json();
        embedding = jsonResponse?.data[0]?.embedding;
        // console.log("I am token: ", jsonResponse?.usage?.total_tokens," I am promttoken: ", jsonResponse?.usage?.prompt_tokens);
        return embedding;
    }
  }catch(error){
    console.log(error);
    throw new Error(error);
  }

}


module.exports = getEmbeddings;