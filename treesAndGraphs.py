from typing import Optional, Type, TypeVar

DATA = [25, 15, 50, 10, 22, 35, 70, 4, 12, 31, 44, 66, 90, 18, 24];


class Node:
	def __init__(self, data, left = None, right = None):
		self.data = data
		self.left = left
		self.right = right


class BinarySearchTree:
	def __init__(self, root = None):
		self.root = root;


	def insert(self, data): 
		if(self.root == None):
			self.root = Node(data)
			return
		self.__insert(data, self.root)


	def contains(self, data):
		if(self.root == None):
			return False
		return self.__contains(data, self.root)

	def __insert(self, data, node):
		if(data <= node.data):
			if(node.left == None):
				node.left = Node(data)
				return
			else:
				return self.__insert(data, node.left)
		else:
			if(node.right == None):
				node.right = Node(data)
				return
			else:
				return self.__insert(data, node.right)


	def __contains(self, data, node):
		if(node.data == data):
			return True
		elif (data < node.data): 
			if (node.left == None):
				return False
			else:
				return self.__contains(data, node.left)
		else:
			if (node.right == None):
				return False
			else:
				return self.__contains(data, node.right)


tree = BinarySearchTree()

for d in DATA:
	print("inserting", d)
	tree.insert(d)

print(tree.contains(25), tree.contains(70), tree.contains(0))

