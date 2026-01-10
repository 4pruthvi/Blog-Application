import conf from '../conf.js';
import { Client, ID, Storage, Databases,Query } from 'appwrite';


export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectID)
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}) {
        try {
            return await this.database.createDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("AppWrite :: createPost :: error",error);
            
        }
    }

    async updatePost(slug, {title,content,featuredImage,status,userId}) {
        try {
            return await this.database.updateDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("AppWrite server :: updatePost :: error",error);
        }
        
    }

    async deletePost(slug) {
        try {
            return await this.database.deleteDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                slug,
            )
            return true;
        } catch (error) {
            console.log("AppWrite server :: deletePost :: error",error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                slug,
            )
        } catch (error) {
            console.log("AppWrite server :: getPost :: error",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.database.listDocuments(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                queries,
            )
        } catch (error) {
           console.log("Appwrite service :: getPosts :: error",error);
           return false;
        }
    }

    //file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketID,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appWriteBucketID,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appWriteBucketID,
                fileId,
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error",error);
        }
    }
}

const service = new Service();

export default service;