import prisma from "../Connections/PrismaClient";
import Product from "../DataTransferObejct/Product";

class ProductRepository {
    getAllAction = async () => {
        try {
            const response = await prisma.product.findMany();
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    saveAction = async (params: Product) => {
        try {
            const {name, price, description} = params;
            const save = await prisma.product.create({
                data: {name, price, description},
            });
            return save;
        } catch (e) {
            console.log(e)
        }
    }

    findOneAction = async (params: Product) => {
        try {
            const productId = prisma.product.findUnique({
                where: {id: params.id}
            });
            return productId;
        } catch (e) {
            console.log(e)
        }
    }

    updateAction = async (params: Product) => {
        try {
            const {id, name, price, description} = params
            const updateProduct = await prisma.product.update({
                where: {id},
                data: {name, price, description}
            });
            return updateProduct
        } catch (e) {
            console.log(e)
        }
    }

    deleteProductAction = async (params: Product) => {
        try {
            const deleteProductId = await prisma.product.delete({
                where: {id: params.id}
            })
            return deleteProductId
        } catch (e) {
            console.log(e)
        }
    }
}

export default ProductRepository;