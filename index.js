function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42
    } else {
        return 42 - blocks
    }
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks(blocks);
    return distanceFromHqInBlocks * 264;
}
distanceFromHqInFeet(43)

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        const distance = destination - start;
        return distance * 264;
    } else if (start > destination) {
        const distance = start - destination;
        return distance * 264;
    }
}
distanceTravelledInFeet(43,48);

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0
    }else if (distance > 400 && distance < 2000) {
        return 0.02 * (distance - 400)
    }else if (distance >= 2000 && distance < 2500) {
        return 25;
    }else{
        return "cannot travel that far"
    }
}