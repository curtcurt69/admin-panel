import React from "react";
import {
    Edit,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Select
} from "@pankod/refine-chakra-ui";
import { useForm } from "@pankod/refine-react-hook-form";
import { useSelect } from "@pankod/refine-core";

export const PostEdit = () => {
    const {
        refineCore: { formLoading, queryResult },
        saveButtonProps,
        register,
        resetField,
        formState: { errors },
    } = useForm({
        refineCoreProps: {
            metaData: {

                populate: ["category"],
            }
        }
    });

    const postsData = queryResult?.data?.data;

    const { options: categoryOptions } = useSelect({
        resource: "categories",
        defaultValue: postsData?.category?.id,
    });

    React.useEffect(() => {
        resetField("category.id");
    }, [categoryOptions]);

    return (
        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <FormControl mb="3" isInvalid={!!(errors as any)?.id}>
                <FormLabel>Id</FormLabel>
                <Input
                    disabled
                    type="number"
                    {...register("id", {
                        required: "Required field!"
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.id?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.title}>
                <FormLabel>Title</FormLabel>
                <Input
                    type="text"
                    {...register("title", {
                        required: "Required field!"
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.title?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.content}>
                <FormLabel>Content</FormLabel>
                <Input
                    type="text"
                    {...register("content", {
                        required: "Required field!"
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.content?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.category}>
                <FormLabel>Category</FormLabel>
                <Select
                    placeholder="Select category"
                    {...register("category.id", {
                        required: "Required field!"
                    })}
                >
                    {categoryOptions?.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
                <FormErrorMessage>
                    {(errors as any)?.category?.id?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.createdAt}>
                <FormLabel>Created At</FormLabel>
                <Input
                    disabled
                    {...register("createdAt", {
                        required: "Required field!"
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.createdAt?.message as string}
                </FormErrorMessage>
            </FormControl>

            
            <FormControl mb="3" isInvalid={!!(errors as any)?.updatedAt}>
                <FormLabel>Updated At</FormLabel>
                <Input
                    disabled
                    {...register("updatedAt", {
                        required: "Required field!"
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.updatedAt?.message as string}
                </FormErrorMessage>
            </FormControl>

            
            <FormControl mb="3" isInvalid={!!(errors as any)?.publishedAt}>
                <FormLabel>Published At</FormLabel>
                <Input
                    disabled
                    {...register("publishedAt", {
                        required: "Required field!"
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.publishedAt?.message as string}
                </FormErrorMessage>
            </FormControl>

            
            <FormControl mb="3" isInvalid={!!(errors as any)?.locale}>
                <FormLabel>Locale</FormLabel>
                <Input
                    disabled
                    type="text"
                    {...register("locale", {
                        required: "Required field!"
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.locale?.message as string}
                </FormErrorMessage>
            </FormControl>

        </Edit>
    );
};