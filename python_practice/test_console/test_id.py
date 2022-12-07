import uuid

class NewId():
    def __init__(self):
        self.id = uuid.uuid4()


if __name__ == "__main__":
    my_id = NewId()
    print(my_id)
    print(my_id.id)
    print(str(my_id.id))
