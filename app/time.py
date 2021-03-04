import time
import webbrowser
# t = int(input("How many seconds? "))
# print("Pomodoro")
def countdown():
    print("Pomodoro")
    for i in range(4):
        t = 1*5
    while t:
        mins = t // 60
        secs = t % 60
        timer = '{:02d}:{:02d}'.format(mins,secs)
        print(" " + timer, end="\r")
        time.sleep(1)
        t -= 1
    print("Break")
