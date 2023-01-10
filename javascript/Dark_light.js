function whatcolor(color){
    switch(color.toLowerCase()){
        case "yellow":
        case"pink":
        case "orange":
        console.log("Light Color");
        break;
        case "blue":
            case "purple":
                case "brown":
                    console.log("Dark Color");
        break;
        default:
            console.log("Unown Color");
    }
}
whatcolor('yellow');
whatcolor('blue');
whatcolor('pink');
whatcolor('orange');
whatcolor('brown');
whatcolor('purple');
whatcolor('red');