class Remote{
    id;tv;

    constructor(id, tv) {
        this.id = id;
        this.tv = tv;
    }
    chuyenKenh(channel){
        this.tv.channel = channel;
    }
    chinhAmLuong(volume){
        this.tv.volume = volume;
    }
}