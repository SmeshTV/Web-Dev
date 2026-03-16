class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Some generic animal sound..."

    def describe(self):
        return f"{self.name} is {self.age} years old and has {self.color} color"

    def __str__(self):
        return f"{self.__class__.__name__}: {self.name}, {self.age} years, {self.color}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof! Woof!"

    def wag_tail(self):
        return f"{self.name} is wagging its tail happily"


class Cat(Animal):
    def __init__(self, name, age, color, favorite_toy):
        super().__init__(name, age, color)
        self.favorite_toy = favorite_toy

    def speak(self):
        return "Meow~"

    def play(self):
        return f"{self.name} is playing with {self.favorite_toy}"