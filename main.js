
    let apikey = "595ddcfb"
    let page = 7
    let search = "bill"
    let api = `http://www.omdbapi.com/?s=${search}&apikey=${apikey}&page=${page}`
    const template = renderElement("template").content
    const renders = (arr) => {
        arr.map((item) => {
            console.log(arr)
        })
    }
async function Apii(){
    let json = await fetch(api)
    let response = await json.json()
    renders(response.Search)
}
Apii()
