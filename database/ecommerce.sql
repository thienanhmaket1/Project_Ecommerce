PGDMP                         x         	   ecommerce    12.2    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17251 	   ecommerce    DATABASE     �   CREATE DATABASE ecommerce WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE ecommerce;
                postgres    false            �            1259    17260    ec_users    TABLE     �   CREATE TABLE public.ec_users (
    user_id text NOT NULL,
    user_username character varying(50) NOT NULL,
    user_email text NOT NULL,
    user_phone character varying(21),
    user_password text NOT NULL,
    user_fullname character varying(50)
);
    DROP TABLE public.ec_users;
       public         heap    postgres    false            �
          0    17260    ec_users 
   TABLE DATA           p   COPY public.ec_users (user_id, user_username, user_email, user_phone, user_password, user_fullname) FROM stdin;
    public          postgres    false    202   0       
           2606    17267    ec_users ec_users_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.ec_users
    ADD CONSTRAINT ec_users_pkey PRIMARY KEY (user_id);
 @   ALTER TABLE ONLY public.ec_users DROP CONSTRAINT ec_users_pkey;
       public            postgres    false    202            �
   5   x�342651�LL��̃�鹉�9z�����F�&�f��P�#HW� ���     