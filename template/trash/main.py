

with open('wilaya.txt', 'r') as file:
    with open("out2.txt", 'w') as file2:
        content = file.readlines()
        for wilaya in content:
            wilaya = "\"" + wilaya[:-1] + "\"" + ","
            file2.write(wilaya)
