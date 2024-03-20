import requests
import json

#Fetches the product
def fetch_product_data(url):
    try:
        response = requests.get(url)
        #Raises an error for bad responses
        response.raise_for_status()
        #The JSON structure includes a products' key
        return response.json()['products']
    except requests.exceptions.RequestException as e:
        print(f"Errorfetchingdata:{e}")
        return None
    
def list_all_products(products):
    #Print a new line
    print()
    print("Product List: ")
    #Iterates through all products and prints them one by one
    for product in products:
        print(f"{product['title']}")
        
def search_products(products, name):
    for product in products:
        #Checks if the name provided matches the current product being iterated through
        if name == product['title']:
            print("\t\t\t\tProduct Details: ")
            #Prints the key and value in the entire object
            for key, value in product.items():
                if(type(value) != list):
                    print(f'\t\t\t\t{key}: {value}')
                else:
                    print(f"\t\t\t\t{key} list: ")
                    for item in value:
                        print(f"\t\t\t\t\t{item}")
            return
    #In case the name provided does not match any of the products, prints a product not found message
    print("Product not found")  
    
    
def main():
    products_url = ' https://dummyjson.com/products' 
    products = fetch_product_data(products_url)
    if products:
        while True:
            choice = input("Choose an option:\n1.List all products \n2.Search for a product \n3.Exit \n")
            if choice == '1':
                list_all_products(products)
            elif choice == '2':
                product_name = input("Please enter a product name: ")
                search_products(products, product_name)
            elif choice == '3':
                break
            else:
                print("Invalid option, please try again")
                
if __name__ == "__main__":
    main()