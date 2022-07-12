function enough(cap, on, wait) {
    // cap = 운전기사를 제외 한 버스 수용 인원
    // on = 운전자를 제외한 버스의 인원수
    // wait = 운전자를 제외한 버스에 타기 위함 사람 수 
    // 공간이 충분하면 0 반환, 공간이 부족하면 탑승할 수 없는 승객 수 반환 
    // return cap - on < wait ? Math.abs(cap - on - wait) : 0 ;
    return on + wait > cap ? 0 : on + wait - cap 
}


  enough(100, 60, 50)