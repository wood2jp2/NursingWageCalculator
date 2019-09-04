# def testGenerator():
#     x = 1
#     print('This prints first')
#     yield x
#     print('This prints secord')
#     x +=21
#     return x

# a = testGenerator()
# print(next(a))
# # b = next(a)

arr = [1, 2, 3, 4]

def cube_numbers(num):
    return num**3

cube_array = list(map(cube_numbers, arr))
print(cube_array)