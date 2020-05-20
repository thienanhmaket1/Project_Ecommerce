--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ec_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ec_users (
    user_id text DEFAULT public.uuid_generate_v4() NOT NULL,
    user_username character varying(50) NOT NULL,
    user_email text NOT NULL,
    user_phone character varying(21),
    user_password text NOT NULL,
    user_fullname character varying(50)
);


ALTER TABLE public.ec_users OWNER TO postgres;

--
-- Data for Name: ec_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ec_users (user_id, user_username, user_email, user_phone, user_password, user_fullname) FROM stdin;
1be2baac-d280-406b-8275-b61ab55cf81e	manhkhang			Fireflies99	
\.


--
-- Name: ec_users ec_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ec_users
    ADD CONSTRAINT ec_users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

