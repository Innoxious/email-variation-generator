import math as m

def applyMask(string: str, mask: int):
    maskAsString = "{0:b}".format(mask)
    lengthDiff = len(string) - 1 - len(maskAsString)
    
    if lengthDiff != 0:
        # Pad mask with leading zeros
        maskAsString = "0" * lengthDiff + maskAsString

    stringAsList = list(string)
    numPeriods = 0
    for i in range(len(maskAsString)):
        if maskAsString[i] == '0':
            numPeriods += 1
            stringAsList.insert(i + numPeriods, '.')
    
    output = ("").join(stringAsList)
    return output


string = "email"
startMask = m.pow(2, len(string) - 1)

for i in range(0, int(startMask)):
    print(applyMask(string, i))
