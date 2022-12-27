
const prompt = require('prompt-sync')();//Dart dilinde ki import etmek gibi prompt-sync eklentisini projemize ekliyoruz.
const Task = ["Node.js", "Flutter", "JavaScript"];
function TaskGetir(){
    console.log("Taskler Yükleniyor..."+"\n")
    console.log("KAĞAN ROADMAP - In Progres ")
    Task.map(task => console.log(task));

}

function TaskGonder(){
    return new Promise((resolve, reject) => {
        console.log("");
        const task = prompt("Yeni Task Ekle:");//Prompt eklentisi sayesin datamıza terminal aracılığı ile yeni task ekliyoruz.
        console.log("Yeni Task Ekleniyor...");
        Task.push(task);
        resolve(task);
        //reject(task); Eğer bağlantı olmadığı şekli simüle etmek ister isek reject kullanarak terminalde hata alabiliriz.


        
    })
}

async function ShowTask(){
    try {
        TaskGetir();
        await TaskGonder();
        TaskGetir();

    } catch (error) {
        console.log(''),
        console.log('Liste Yeniden Getirilemedi!')
    }
}

ShowTask();