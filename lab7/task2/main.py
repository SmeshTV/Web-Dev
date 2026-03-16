from models import Animal, Dog, Cat

def main():
    animals = [
        Dog("Rex", 4, "brown", "German Shepherd"),
        Cat("Luna", 2, "grey", "yarn ball"),
        Dog("Buddy", 1, "golden", "Golden Retriever"),
        Cat("Milo", 7, "black", "laser pointer")
    ]

    print("=== Our pets ===\n")

    for pet in animals:
        print(pet)                          # использует __str__
        print(pet.describe())
        print("Sound:", pet.speak())        # полиморфизм

        if isinstance(pet, Dog):
            print("Dog action:", pet.wag_tail())
        elif isinstance(pet, Cat):
            print("Cat action:", pet.play())

        print("-" * 40)


if __name__ == "__main__":
    main()