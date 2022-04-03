

with open('wilaya.txt', 'r+') as file:
    with open("out.txt", 'w') as file2:
        content = file.readlines()
        for wilaya in content:
            wilaya = "<option>" + wilaya[:-1] + "</option>"
            file2.write(wilaya)
