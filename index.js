function in1To10(n,outsideMode){
    if( (n >= 1 && n <= 10) && (outsideMode ! == true)){
    return true;
    }else if ((outsideMode === true) && ( n <= 1 || n >= 10)){
    return true;
    } else {
    return false;
    }
    
}