import prisma from "../Connections/PrismaClient"

class AccountRepository {
    saveAction = async (data: any) :Promise<object> => {
        return await prisma.account.create({data});
    }

    updateAction = async (id: number, data: any) :Promise<object> =>  {
        return await prisma.account.update({
            where: {id},
            data
        })
    }

    findOneAction = async (id: number) => {
        return await prisma.account.findUnique({
            where: {id}
        })
    }
}

export default AccountRepository;